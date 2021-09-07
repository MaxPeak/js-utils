type Options = {
  accept?: string
  multiple?: boolean
  limit?: number
}
type Result = {
  success: boolean
  message?: string
  files?: FileList
}
export const upload = ({ accept, multiple, limit }: Options = {}) => {
  return new Promise<Result>(resolve => {
    const file = document.createElement('input');
    file.type = 'file'
    accept && (file.accept = accept)
    multiple && (file.multiple = multiple)
    file.value = ''
    file.click()
    file.addEventListener('change', () => {
      if (limit && multiple && file.files!.length > limit) {
        resolve({ success: false, message: 'Limit Exceeded' })
      }
      if (accept) {
        for (let i = 0; i < file.files!.length; i++) {
          const [suffix] = file.files![i].name.match(/[^\.]+(?!.*\.)/) || []
          if (`.${suffix}` === accept) continue
          resolve({ success: false, message: 'The accepted file type does not match' })
        }
      }
      resolve({ success: true, files: file.files! })
    })
  })
}