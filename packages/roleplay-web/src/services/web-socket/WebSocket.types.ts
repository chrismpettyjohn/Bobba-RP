import {
  WebSocketIncomingEvent,
  WebSocketIncomingEvents,
  WebSocketOutgoingEvent,
  WebSocketOutgoingEvents,
} from '@instinct-plugin/bobba-rp-types';

export interface WebSocketServiceBase {
  addSubscriber<K extends WebSocketIncomingEvent>(
    event: K,
    callback: WebSocketSubscriber<WebSocketIncomingEvents[K]>
  ): void;
  sendEvent<K extends WebSocketOutgoingEvent>(
    event: K,
    payload: WebSocketOutgoingEvents[K]
  ): void;
  getConnectionStatus(): boolean;
  retry(): void;
}

export type WebSocketSubscriber<T> = (payload: T) => void | Promise<void>;
