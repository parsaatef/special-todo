import { ReactWrapper, ShallowWrapper } from "enzyme"

/**
 * Find test element by data-test attribute
 * @param wrapper 
 * @param testId
 * @returns  
 */
export const findTestEl = (wrapper: ShallowWrapper | ReactWrapper, testId: string) => {
    return wrapper.find(`[data-test="${testId}"]`);
};