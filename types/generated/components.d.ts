import type { Schema, Attribute } from '@strapi/strapi';

export interface EntriesEntry extends Schema.Component {
  collectionName: 'components_entries_entries';
  info: {
    displayName: 'entry';
    icon: 'quote';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'entries.entry': EntriesEntry;
    }
  }
}
