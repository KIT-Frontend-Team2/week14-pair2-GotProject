import { setupWorker } from 'msw'
import * as IssuesApi from './apis/issues.api'

const handler = [...Object.values(IssuesApi)]
export const worker = setupWorker(...handler)
