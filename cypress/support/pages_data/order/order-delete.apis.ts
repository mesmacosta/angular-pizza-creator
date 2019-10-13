const apis = [{
    method: 'DELETE',
    name: 'deleteTagOfEntry',
    regex: '**/projects/**/entryGroups/**/**/entries/**/tags/**',
    response: 'entry/delete_tag/delete_tag_response',
}]

export { apis }
