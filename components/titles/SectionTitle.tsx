import React from 'react'
import Header6 from '../headings/Header6'

function SectionTitle({ text }: { readonly text: string }) {
  return (
    <Header6 className='uppercase whitespace-nowrap font-sans-medium' text={`/ ${text}`}/>
  )
}

export default SectionTitle