EditorDialog example:

```js
<EditorDialog editorSettings={ [
                         {
                             component: 'button-group',
                             properties: {
                                 id: 123,
                                 title: 'Color',
                                 buttons: [
                                     {
                                         children: '',
                                         color: 'btn-primary',
                                         dataset: {
                                             componentToChangeIdentifier: 852,
                                             propertyToChangeKey: 'color',
                                             propertyToChangeValue: 'btn-primary',
                                         },
                                     },
                                     {
                                         children: '',
                                         color: 'btn-danger',
                                         dataset: {
                                             componentToChangeIdentifier: 852,
                                             propertyToChangeKey: 'color',
                                             propertyToChangeValue: 'btn-danger',
                                         },
                                     },
                                     {
                                         children: '',
                                         color: 'btn-warning',
                                         dataset: {
                                             componentToChangeIdentifier: 852,
                                             propertyToChangeKey: 'color',
                                             propertyToChangeValue: 'btn-warning',
                                         },
                                     },
                                     {
                                         children: '',
                                         color: 'btn-info',
                                         dataset: {
                                             componentToChangeIdentifier: 852,
                                             propertyToChangeKey: 'color',
                                             propertyToChangeValue: 'btn-info',
                                         },
                                     },
                                     {
                                         children: '',
                                         color: 'btn-dark',
                                         dataset: {
                                             componentToChangeIdentifier: 852,
                                             propertyToChangeKey: 'color',
                                             propertyToChangeValue: 'btn-dark',
                                         },
                                     },
                                     {
                                         children: '',
                                         color: 'btn-success',
                                         dataset: {
                                             componentToChangeIdentifier: 852,
                                             propertyToChangeKey: 'color',
                                             propertyToChangeValue: 'btn-success',
                                         },
                                     },
                                     {
                                         children: '',
                                         color: 'btn-secondary',
                                         dataset: {
                                             componentToChangeIdentifier: 852,
                                             propertyToChangeKey: 'color',
                                             propertyToChangeValue: 'btn-secondary',
                                         },
                                     },
                                 ],
                             },
                             onClick: null,
                         },
                         {
                             component: 'editable-field',
                             properties: {
                                 title: 'Button Label',
                                 identifier: 654,
                                 id: 456,
                                 dataset: {
                                     componentToChangeIdentifier: 147,
                                     propertyToChangeKey: 'children',
                                 },
                             },
                             onChange: null,
                         },
                     ],
    dataset={{example: 'expl'}}
    onClick={null}
} />
```