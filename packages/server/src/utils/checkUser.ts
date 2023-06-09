import { UsersModel } from '../models/users'
import type { UserProps } from './types'

export async function checkUser(user: UserProps) {
  let userId = await UsersModel.findOne({
    attributes: ['id', 'user_id', 'login', 'avatar'],
    where: {
      user_id: user.id,
    },
  })
  if (!userId) {
    userId = await UsersModel.create({
      user_id: user.id,
      login: user.login,
      avatar: user.avatar,
    })
  }
  return userId.dataValues
}
