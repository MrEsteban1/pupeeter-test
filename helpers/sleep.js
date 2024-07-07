export async function sleep(seconds = 3) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
