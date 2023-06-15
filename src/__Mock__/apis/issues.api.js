import { rest } from 'msw'
import { issuesMock } from '__Mock__/datas/issues.data'
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export const getIssues = rest.get(
	REACT_APP_BACKEND_URL,
	async (_, res, ctx) => {
		return res(ctx.status(200), ctx.json(issuesMock))
	},
)
