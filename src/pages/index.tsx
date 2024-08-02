import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <Tabs.Root
            defaultValue="all"
            onValueChange={(value) =>
              setFilter(value as 'all' | 'pending' | 'completed')
            }
          >
            <Tabs.List className="rounded-lg flex gap-2 space-x-1 p-1">
              <Tabs.Trigger
                value="all"
                className="rounded-full border border-gray-200 px-6 py-3 text-center text-sm font-bold text-gray-700 ring-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                All
              </Tabs.Trigger>
              <Tabs.Trigger
                value="pending"
                className="rounded-full border border-gray-200 px-6 py-3  text-center text-sm font-bold text-gray-700 ring-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Pending
              </Tabs.Trigger>
              <Tabs.Trigger
                value="completed"
                className="rounded-full border border-gray-200 px-6 py-3  text-center text-sm font-bold text-gray-700 ring-gray-700 data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>

          <TodoList filter={filter} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
