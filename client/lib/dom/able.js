export function disableElement(node, boolean) {
  node.disabled = boolean;
}

export function enableElement(node, boolean) {
  node.enabled = boolean;
}

// isDisableState(node) => true / false

export function visibleElement(node, boolean) {
  node.visible = boolean;
}

export function invisibleElement(node, boolean) {
  node.invisible = boolean;
}

// isVisibleState(node) => true / false
