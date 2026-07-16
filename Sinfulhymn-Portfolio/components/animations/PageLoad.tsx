import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'

const PageLoad = ({ children }: { children: ReactNode }) => {
  const { asPath } = useRouter()
  return (
    <div className="overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {},
            animate: {
              transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
              },
            },
            exit: {},
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default PageLoad
