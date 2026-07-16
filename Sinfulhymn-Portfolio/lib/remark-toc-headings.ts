import { visit } from 'unist-util-visit'
import GithubSlugger from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import type { Node } from 'unist'

interface HeadingNode extends Node {
  depth: number
}

export interface TocHeading {
  value: string
  url: string
  depth: number
}

interface RemarkTocHeadingsOptions {
  exportRef: TocHeading[]
}

export default function remarkTocHeadings(options: RemarkTocHeadingsOptions) {
  return (tree: Node) =>
    visit(tree, 'heading', (node: HeadingNode) => {
      const textContent = toString(node)
      options.exportRef.push({
        value: textContent,
        url: '#' + GithubSlugger.slug(textContent),
        depth: node.depth,
      })
    })
}
