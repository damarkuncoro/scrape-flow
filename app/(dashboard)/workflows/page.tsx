import React, { Suspense } from 'react'
import CreateWorkflowDialog from './_components /create-workflow-dialog';

function Workflows() {
   return (
    <div className="flex h-full flex-1 flex-col px-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Workflows</h1>
          <p className="text-muted-foreground">Manage your workflows</p>
        </div>

        <CreateWorkflowDialog />
      </div>

      <div className="h-full py-6">
        <Suspense fallback={<UserWorkflowsSkeleton />}>
          <UserWorkflows userId={userId as string} />
        </Suspense>
      </div>
    </div>
  );
}

export default Workflows