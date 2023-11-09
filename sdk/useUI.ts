/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displayMenu = signal(false);
const initChatBot = signal(false);
const refreshBot = signal(false);

const state = {
  displayMenu,
  initChatBot,
  refreshBot,
};

export const useUI = () => state;
