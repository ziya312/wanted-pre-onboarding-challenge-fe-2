/**
 * @typedef {object} todoData - Todo 데이터
 * @property  {number} id - 일정 id
 * @property  {string} content - 일정 내용
 * @property  {string} category - 카테고리
 * @property  {boolean} isDone - 완료 여부
 * @property  {string[]} [tags] - 태그들
 */

/**
 *
 * @type {todoData}
 */

const todoData = {};

/**
 * [CREATE] - 할 일을 추가할 수 있다. / 내용없이 추가할 수 없다.
 * @function createTodo
 * @param {number} id - 일정 id
 * @param {string} content - 일정 내용
 * @param {string} category - 카테고리
 * @param {string[]} tags - 태그들
 */
function createTodo(id, content, category, tags) {}

/**
 * [READ] - 모든 할 일을 조회할 수 있다. / ID 기반으로 특정 할 일을 조회할 수 있다
 * @function readTodo
 * @param {number} id - 일정 id
 */
function readTodo(id) {}

/**
 * [UPDATE] - ID를 제외한 모든 속성을 수정할 수 있다. / 특정 할 일의 특정 태그를 수정할 수 있다.
 *
 * @function updateTodo
 * @param {string} content - 일정 내용
 * @param {String} category - 카테고리
 * @param {boolean} isDone - 완료 여부
 * @param {string[]} tags - 태그들
 */
function updateTodo(content, category, isDone, tags) {}

/**
 * [DELETE] - ID를 기반으로 특정 할 일을 삭제할 수 있다. / 모든 할 일을 제거할 수 있다. / 특정 할 일의 특정 태그를 삭제할 수 있다. / 특정 할 일의 모든 태그를 제거할 수 있다.
 * @function deleteTodo
 * @param {number} id - 일정 id
 */
function deleteTodo(id) {}
