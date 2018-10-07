export class Utils {
  public static parseQuery(queryString: string, decoded: boolean = false): Map<string, string> {
    const decodeUrlString = decoded ? queryString : decodeURI(queryString);

    const query = new Map<string, string>();
    const segments = decodeUrlString[0] === '?'
      ? decodeUrlString.slice(1, decodeUrlString.length).split('&')
      : decodeUrlString.split('&');

    segments.forEach(segment => {
      const parts = segment.split('=');
      if (parts.length === 2) {
        query.set(parts[0], parts[1]);
      }
    });

    return query;
  }
}