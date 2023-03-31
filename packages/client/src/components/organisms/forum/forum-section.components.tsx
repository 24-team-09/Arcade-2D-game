import React, { useEffect } from 'react'
import {
  CatalogBlock,
  FormSeparator,
  H2,
  SectionRowContent,
  SectionRowContentTitle,
  SectionRowMessagesCount,
  SectionRowLastMessage,
  FormInput,
  FormTextarea,
  FormButtonWrapper,
} from '@/components/templates/forum/forum.styles'
import { ForumSectionProps } from '@/components/organisms/forum/forum-types'
import { Button } from '@/components'
import useSectionForm from '@/components/organisms/forum/forum-logic'
import dateParse from '@/utils/dateParse'

export const ForumSectionTitle = ({ title }: { title: string }) => {
  return <H2>{title}</H2>
}

const ForumSectionTopicsElement = (el: ForumSectionProps) => {
  const { parentId, id, title, postCount, lastTopic } = el

  return (
    <CatalogBlock>
      <SectionRowContent>
        <SectionRowContentTitle to={`/forum/${parentId}/${id}`}>
          {title}
        </SectionRowContentTitle>
      </SectionRowContent>
      <SectionRowMessagesCount>{postCount}</SectionRowMessagesCount>
      <SectionRowMessagesCount>{lastTopic.userName}</SectionRowMessagesCount>
      <SectionRowLastMessage>{dateParse(lastTopic.date)}</SectionRowLastMessage>
    </CatalogBlock>
  )
}

export const ForumSectionTopics = ({ data }: { data: ForumSectionProps[] }) => {
  return (
    <>
      {data.map(el => (
        <ForumSectionTopicsElement key={el.id} {...el} />
      ))}
    </>
  )
}

export const ForumSectionForm = ({ id }: { id: string }) => {
  const {
    register,
    onSubmitHandler,
    handleSubmit,
    isValid,
    setValue,
    getValues,
  } = useSectionForm(id)

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormSeparator />
      <H2 marginBottom="30px">Добавить тему</H2>
      <FormInput
        {...register('title', { required: true })}
        placeholder="Заголовок темы"
      />
      <FormTextarea
        {...register('message', { required: true })}
        suppressContentEditableWarning={true}
        onInput={e => {
          setValue('message', e.currentTarget.innerHTML, {
            shouldValidate: true,
          })
        }}
        contentEditable="true"
        placeholder="Сообщение...">
        {getValues('message') == '' && ''}
      </FormTextarea>
      <FormButtonWrapper>
        <Button
          as="button"
          type="submit"
          color="#579945"
          variant="contained"
          disabled={!isValid}>
          Отправить
        </Button>
      </FormButtonWrapper>
    </form>
  )
}