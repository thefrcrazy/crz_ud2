fx_version 'adamant'
game 'gta5'

name 'crz_ud2'
description 'Menu Custom By TheFRcRaZy'

ui_page 'index.html'

files {
    'index.html',
    'js/script.js',
    'css/style.css',
    'img/*png'
}

client_scripts {
    'lua/client.lua'
}

server_scripts {
    -- '@mysql-async/lib/MySQL.lua',
    'lua/server.lua'
}