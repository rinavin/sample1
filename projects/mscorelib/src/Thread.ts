import {NotImplementedException} from "./NotImplementedException";
import { interval } from "rxjs";

export class Thread {
  private static nextId: number = 1;
  static CurrentThread: Thread = new Thread();
  ManagedThreadId: number = 0;

  constructor() {
    this.ManagedThreadId = Thread.nextId++;
  }

  /// <summary>
  ///   Free the thread so it will be able to do other work, like gui events
  /// </summary>
  /// <param name = "millisecondsTimeout"> timeout in milliseconds</param>

  public static async Sleep(millisecondsTimeout: number): Promise<void>
  {
    await new Promise((resolve, reject) => {
      let timer = interval(millisecondsTimeout);
      let subscription = timer.subscribe(state => {subscription.unsubscribe(); resolve();});
    }).then();
  }
}
