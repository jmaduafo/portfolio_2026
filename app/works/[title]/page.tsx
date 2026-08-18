import FormatContainer from '@/components/containers/FormatContainer';
import Detail from '@/components/pages/work-detail/Detail';
import React from 'react'

async function WorkDetail({ params }: { params: { title: string }}) {
  const { title } = await params;

  return (
    <FormatContainer>
      <Detail title={title}/>
    </FormatContainer>
  )
}

export default WorkDetail