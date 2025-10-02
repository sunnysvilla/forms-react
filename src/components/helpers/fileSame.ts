export default function areFilesSame(file1: File, file2: File): boolean {
  if (file1.name !== file2.name) return false;
  if (file1.size !== file2.size) return false;
  if (file1.type !== file2.type) return false;
  return true;
}
