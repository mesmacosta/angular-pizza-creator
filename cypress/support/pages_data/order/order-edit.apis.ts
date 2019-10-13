const apis = [{
    method: 'GET',
    name: 'editEntry',
    regex: '**/projects/**/entryGroups/@bigquery/**/entries/**?key=AIzaSyCI-zsRP85UVOi0DjtiCwWBwQ1djDy741g',
    response: 'entry/edit_tag/edit_tag_entry_response',
},
{
    method: 'POST',
    name: 'editSearch',
    regex: '**/catalog:search**',
    response: 'entry/edit_tag/edit_tag_search_response',
}]

export { apis }
