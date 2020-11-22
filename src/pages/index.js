import React, {useEffect, useState} from "react"

import { useForm, usePlugin  } from 'tinacms'

const Home = () => {

  const [ pageData ] = useState({
    title: "this is the title",
    description: "description"
  })
  
  const [name, setName] = useState('Jon')
      
  const onSubmitImplementation = (nameToEcho) => {
    alert(`Submitting ${nameToEcho}`)
  }
  
  const formConfig = {
    id: `demo`,
    label: 'demo',
    initialValues: pageData,
    onSubmit: (values) => {
        onSubmitImplementation(name)
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

  const [modifiedValues, form] = useForm(formConfig, { values: {name}, fields: formConfig.fields })

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
        <button onClick={() => onSubmitImplementation(name)}>Say my name</button>
        
      </>
  )
}

export default Home