import React, {useEffect, useState} from "react"

import { useForm, usePlugin, withPlugin  } from 'tinacms'

const Home = () => {

  const [ pageData ] = useState({
    title: "this is the title",
    description: "description"
  })
  
  const [name, setName] = useState('Jon')
      
  const onSubmitImplementation = () => {
    alert(`Submitting ${name}`)
  }
  
  const formConfig = {
    id: `demo`,
    label: 'demo',
    initialValues: pageData,
    onSubmit: (values) => {
        onSubmitImplementation()
    },
    fields: [                    
      {
        name: 'title',  
        label: 'Title',             
        component: 'text',          
      },
      {
        name: 'description',
        label: 'Description',
        component: 'textarea',      
      },
    ]
  }

  const [modifiedValues, form] = useForm(formConfig)

  usePlugin(form)
  
  useEffect(() => {
    setName('Snow')
  }, [])
  
  return (
      <>
        <h3>Title</h3>
        <div>{modifiedValues.title}</div>

        <h3>Description</h3>
        <div>{modifiedValues.description}</div>

        <h4>Name</h4>
        <div>{name}</div>
        
        <br/>
        <button onClick={onSubmitImplementation}>Say my name</button>
        
      </>
  )
}

export default withPlugin(Home)