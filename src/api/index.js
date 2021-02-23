import request from '@/utils/request'

export function getQdysjList(data) {
  return request({
    url: '/pc/area/getAll',
    method: 'post',
    data
  })
}
