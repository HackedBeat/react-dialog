import React from 'react';
import { storiesOf } from '@kadira/storybook';
import '../css/index.css';
import Dialog from '../src/index';
import { exampleWrapper } from './ExampleWrapper';

const EnhancedDialog = exampleWrapper(Dialog);

storiesOf('React Dialog', module)
  .add('basic', () => (
    <EnhancedDialog
      title="Dialog Title"
      isDraggable
    />
  ))
  .add('modal:true', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal
      isDraggable
    />
  ))
  .add('title: ReactElement', () => (
    <EnhancedDialog
      title={<span style={{ color: 'green', fontStyle: 'italic' }}>Dialog Title</span>}
      modal
      isDraggable
    />
  ))
  .add('isDraggable:false', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal
      isDraggable={false}
    />
  ))
  .add('width:700', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal
      width={700}
    />
  ))
  .add('height:500', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal
      height={500}
      isDraggable
    />
  ))
  .add('isResizable:true', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal
      isResizable
      isDraggable
    />
  ))
  .add('allowMinimize:true', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal
      allowMinimize
      isDraggable
    />
  ))
  .add('allowMaximize:true', () => (
    <EnhancedDialog
      title="Dialog Title"
      modal
      allowMaximize
      isDraggable
    />
  ));
