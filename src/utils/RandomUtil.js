function get_a_random_string(length) {
  return (Math.random() + 1).toString(36).substring(12 - length);
}

export { get_a_random_string };
