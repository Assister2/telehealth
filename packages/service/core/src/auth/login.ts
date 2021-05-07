import { AppContext } from '../types'
import { Next } from 'koa'

export async function getUser (ctx: AppContext, next: Next) {
  if (ctx.request.body.email) {
    const {
      uid,
      displayName,
      email,
      emailVerified,
      phoneNumber
    } = await ctx.services.auth.getUserByEmail(ctx.request.body.email as string)

    ctx.state.user = {
      uid,
      name: displayName,
      email,
      emailVerified,
      phoneNumber
    }
  }

  if (ctx.request.body.phoneNumber) {
    const {
      uid,
      displayName,
      email,
      emailVerified,
      phoneNumber
    } = await ctx.services.auth.getUserByEmail(
      ctx.request.body.phoneNumber as string
    )

    ctx.state.user = {
      uid,
      name: displayName,
      email,
      emailVerified,
      phoneNumber
    }
  }
}
