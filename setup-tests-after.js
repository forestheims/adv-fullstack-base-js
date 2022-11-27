/*******************************************************************************
 * This file declares any sort of actions to execute after Jest is setup. At
 * this point, triggers like afterAll/afterEach and beforeAll/beforeEach are
 * available. This is a good place to put global setup and tear down.
 ******************************************************************************/
import { afterAll } from '@jest/globals'
import pool from './server/database.js'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

afterAll(() => pool.end())
global.fetch = jest.fn()
