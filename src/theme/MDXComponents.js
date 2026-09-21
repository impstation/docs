import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
// Globals:
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import WipHeader from '@site/src/components/wipHeader';
import FeatureHeader from '@site/src/components/featureHeader';

export default {
  ...MDXComponents,
  // Add here any components to be used globally
  Tabs,
  TabItem,
  DocCardList,
  WipHeader,
  FeatureHeader,
};