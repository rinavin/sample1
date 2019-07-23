import {Encoding} from "./Encoding";

export class ISO_8859_1_Encoding extends Encoding {

  static readonly ISO_8859_1: ISO_8859_1_Encoding = new ISO_8859_1_Encoding("iso_8859-1");
  constructor(label: string) {
  super(label);
  }

  GetBytes(str: string): Uint8Array {

    if (str === null)
      throw new Error("Argument is null");

    let bytes: Uint8Array = null;

    bytes = new Uint8Array(str.length * 3);
    let bytesCount: number = 0;
    let tmpBytes: Uint8Array;

    for (let i = 0; i < str.length; i++)
    {
      bytes[bytesCount++] = str[i].charCodeAt(0);
    }

    bytes = bytes.subarray(0, 0 + bytesCount);
    return bytes;
  }

  GetString(bytes: Uint8Array, index: number, count: number): string {
    let str: string = null;

    if (bytes === null)
      throw new Error("Argument is null");

    if (index < 0 || count < 0 || (index + count) > bytes.length)
      throw new Error("Argument out of range");

    bytes = bytes.subarray(index, index + count);

    try {

      str = '';
      for (let i = 0; i < bytes.length; i++)
      {
        str += String.fromCharCode(bytes[i]);
      };
    }
    catch (ex) {
    }

    return str;
  }
}
