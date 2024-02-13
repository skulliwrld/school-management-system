import React from 'react'
import TopFied from '@/components/common-components/TopFied';

function Parent() {
  return (
    <section className="w-full border-y-2 px-5">
        <TopFied title="Parent" path="/schoolmgt/parent/add-parent"/>
    </section>
  )
}

export default Parent