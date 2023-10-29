export function decodeBase64ToDataURI({ str, mimeType = "image/jpeg" }: { str: string, mimeType?: string }) {
    return `data:${mimeType};base64,${str}`;
  }
  