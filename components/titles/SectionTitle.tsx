import React from 'react'
import Header6 from '../headings/Header6'
import Header5 from '../headings/Header5'

function SectionTitle({ text }: { readonly text: string }) {
  return (
    <Header5 className='uppercase whitespace-nowrap font-sans-medium' text={`/ ${text}`}/>
  )
}

export default SectionTitle