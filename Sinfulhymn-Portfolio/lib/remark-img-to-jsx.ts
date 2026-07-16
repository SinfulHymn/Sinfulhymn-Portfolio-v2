import { visit } from 'unist-util-visit'
import sizeOf from 'image-size'
import fs from 'fs'
import type { Node, Parent } from 'unist'

interface ImageNode extends Node {
  url: string
  alt?: string | null
  attributes?: unknown
}

interface ParagraphNode extends Parent {
  children: Node[]
}

export default function remarkImgToJsx() {
  return (tree: Node) => {
    visit(
      tree,
      // only visit p tags that contain an img element
      (node: Node) =>
        node.type === 'paragraph' &&
        (node as ParagraphNode).children.some((n) => n.type === 'image'),
      (node: Node) => {
        const paragraphNode = node as ParagraphNode
        const imageNode = paragraphNode.children.find((n) => n.type === 'image') as ImageNode

        // only local files
        if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
          const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)

          // Convert original node to next/image
          ;(imageNode.type = 'mdxJsxFlowElement'),
            ((imageNode as unknown as { name: string }).name = 'Image'),
            (imageNode.attributes = [
              { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
              { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
              { type: 'mdxJsxAttribute', name: 'width', value: dimensions.width },
              { type: 'mdxJsxAttribute', name: 'height', value: dimensions.height },
            ])

          // Change node type from p to div to avoid nesting error
          paragraphNode.type = 'div'
          paragraphNode.children = [imageNode]
        }
      }
    )
  }
}
