export const scrollToChange = (blockId: string): void => {
  const element = document.getElementById(blockId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })

    const leftContent = document.querySelector(
      "#diff-content-split > div:first-child"
    )
    const rightContent = document.querySelector(
      "#diff-content-split > div:last-child"
    )
    if (leftContent && rightContent && element.closest("#diff-content-split")) {
      const scrollTop = leftContent.scrollTop
      rightContent.scrollTop = scrollTop
    }

    element.classList.add("ring-2", "ring-primary")
    setTimeout(() => {
      element.classList.remove("ring-2", "ring-primary")
    }, 1500)
  }
}

export const scrollToPositionUnified = (
  index: number,
  totalLines: number
): void => {
  const content = document.getElementById("diff-content")
  if (content) {
    const scrollPercentage = index / totalLines
    content.scrollTop = scrollPercentage * content.scrollHeight
  }
}

export const scrollToPositionSplit = (index: number, totalLines: number): void => {
  const leftContent = document.querySelector(
    "#diff-content-split > div:first-child"
  )
  const rightContent = document.querySelector(
    "#diff-content-split > div:last-child"
  )
  if (leftContent && rightContent) {
    const scrollPercentage = index / totalLines
    const scrollTop = scrollPercentage * leftContent.scrollHeight
    leftContent.scrollTop = scrollTop
    rightContent.scrollTop = scrollTop
  }
}

export const syncSplitScroll = (
  sourceScrollTop: number,
  targetSelector: string
): void => {
  const targetContent = document.querySelector(targetSelector)
  if (targetContent) {
    targetContent.scrollTop = sourceScrollTop
  }
}
