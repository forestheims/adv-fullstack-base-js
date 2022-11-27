import React, {
  useState,
} from 'react'

export default (
  CancelButton,
  SaveButton,
  EditButton,
  DeleteButton,
  ListItem,
) => {
  const component = (props) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editFoo, setEditFoo] = useState(props.foo.foo)
    const save = (e) => {
      e.preventDefault()
      setIsEditing(false)
      props.onUpdate({...props.foo, foo: editFoo })
    }
    const fooComponent = isEditing
      ? <>
          <form onSubmit={save}>
            <input
              data-testid={'foo-edit-text-' + props.foo.id}
              type="text"
              value={editFoo}
              onChange={e => setEditFoo(e.target.value)}
            />
            <SaveButton>save</SaveButton>
            <CancelButton onClick={() => setIsEditing(false)}>
              cancel
            </CancelButton>
          </form>
        </>
      : <>
          <span data-testid={'foo-' + props.foo.id}>{props.foo.foo}</span>
          <EditButton
            dataTestId={'foo-edit-' + props.foo.id}
            onClick={() => setIsEditing(true)}
          >edit</EditButton>
          <DeleteButton
            dataTestId={'foo-delete-' + props.foo.id}
            onClick={props.onDelete}
          >
            delete
          </DeleteButton>
        </>
    return <ListItem>
      {fooComponent}
    </ListItem
      >
  }
  component.displayName = 'FooListItem'
  return component
}
