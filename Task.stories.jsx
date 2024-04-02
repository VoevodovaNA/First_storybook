import React from 'react';
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

// Добавляем ещё несколько стори для различных состояний компонента Task
export const PinnedWithNoId = {
  args: {
    task: {
      title: 'Pinned task with no ID',
      state: 'TASK_PINNED',
    },
  },
};


export const PinnedWithEmptyTitle = {
  args: {
    task: {
      ...Pinned.args.task,
      title: '',
    },
  },
};

export const PinnedWithCustomAction = {
  args: {
    task: {
      id: '3',
      title: 'Я не знаю, почему всё на английском, но вот русский :) ',
      state: 'TASK_PINNED',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <Story />
        <button onClick={() => alert('Кнопка нажата, спасибо, хорошего рабочего дня!')}>Жмякни сюда</button>
      </div>
    ),
  ],
};

export const ArchivedWithDifferentStyle = {
  args: {
    task: {
      id: '4',
      title: 'Task with Different Style',
      state: 'TASK_ARCHIVED',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ border: '2px dashed gray', padding: '10px' }}>
        <Story />
      </div>
    ),
  ],
};