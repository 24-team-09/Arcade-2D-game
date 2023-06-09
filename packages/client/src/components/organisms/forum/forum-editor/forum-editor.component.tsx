import useSectionForm from '@/components/organisms/forum/forum-logic'
import { useRef } from 'react'
import {
  FormButtonWrapper,
  FormInput,
  FormSeparator,
  FormTextarea,
  FormTextareaWrapper,
  FormTextareaButtons,
  FormTextareaButton,
} from '@/components/templates/forum/forum.styles'
import { H2 } from '@/global-styles'
import { Button } from '@/components'
import { useParams } from 'react-router-dom'
import { ForumEditorProps } from '@/components/organisms/forum/forum-types'
import IconBold from '@/assets/icons/bold.svg'
import IconItalic from '@/assets/icons/italic.svg'
import { userStore } from '@/store'

export const ForumEditor = ({
  title,
  titleInput = null,
  replyMessage,
}: ForumEditorProps) => {
  const { id, postPageId } = useParams()
  const user = userStore()

  const { register, onSubmitHandler, handleSubmit, isValid, setValue } =
    useSectionForm(user, id!, postPageId)
  const messageRef = useRef(null)
  const messageClear = () => {
    ;(messageRef!.current! as HTMLDivElement).innerHTML = ''
  }

  // TODO Deprecated, но пока замены нет
  const onBoldHandler = () => document.execCommand('bold')
  const onItalicHandler = () => document.execCommand('italic')

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormSeparator />
      <H2>{title}</H2>
      {titleInput && (
        <FormInput
          {...register('title', { required: true })}
          placeholder={titleInput}
        />
      )}
      <FormTextareaWrapper>
        <FormTextareaButtons>
          <FormTextareaButton onClick={onBoldHandler}>
            <img src={IconBold} alt="Жирный" />
          </FormTextareaButton>
          <FormTextareaButton onClick={onItalicHandler}>
            <img src={IconItalic} alt="Курсив" />
          </FormTextareaButton>
        </FormTextareaButtons>
        <FormTextarea
          {...register('message', { required: true })}
          suppressContentEditableWarning={true}
          onInput={e => {
            setValue('message', e.currentTarget.innerHTML, {
              shouldValidate: true,
            })
          }}
          contentEditable="true"
          ref={messageRef}
          placeholder="Сообщение...">
          {replyMessage && (
            <>
              <blockquote>{replyMessage}</blockquote>
              <br />
              <br />
            </>
          )}
        </FormTextarea>
      </FormTextareaWrapper>
      <FormButtonWrapper>
        <Button
          as="button"
          type="submit"
          color="#579945"
          variant="contained"
          onClick={messageClear}
          disabled={!isValid}>
          Отправить
        </Button>
      </FormButtonWrapper>
    </form>
  )
}
