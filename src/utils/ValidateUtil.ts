function is_valid_link(link: String) {
  if (link.startsWith('http://') || link.startsWith('https://')) {
    return true;
  } else {
    return false;
  }
}

export { is_valid_link };
