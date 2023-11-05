import { post, usePost, get, put, useGet, request, useRequest } from '@/utils/request';
import { parseQuery } from '@/utils/parseQuery'

export default class Test {
  static get_all_posts() {
    return useGet('https://jsonplaceholder.typicode.com/posts');
  }

  static get_comments_by_post_id_path_style(id) {
    return useGet(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  /**
   * 
   * @param {Object} params 
   * @param {string} params.postId
   * @returns 
   */
  static get_comments_by_post_id_query_style(params) {

    console.log("query 123 ", params);
    let query = parseQuery(params);

    // query = query ? `?${query}` : '';

    console.log("query 123 ", query);
    return useRequest(
      {
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/comments${query}`, 
      })
  }

  /**
   * 
   * @param {Obejct} post 
   * @param {string} post.title 
   * @param {string} post.body
   * @param {number} post.userId
   * @returns 
   */
  static new_post(post) {
    return usePost('https://jsonplaceholder.typicode.com/posts', post);
  }

}