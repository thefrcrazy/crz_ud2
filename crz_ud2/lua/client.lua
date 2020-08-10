ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
end)

local InScreen = false

Citizen.CreateThread(function()
    while true do 
        Citizen.Wait(0)
        local player = GetPlayerPed(-1)
        if IsControlJustReleased(0, 51) and not InScreen and not IsPauseMenuActive() and IsPedInAnyVehicle(player, false) then
            InScreen = true
            SendNUIMessage({
                capot = 1,
                parchocav = 1,
                parchocar = 0,
                spoiler = 1,
                neon = 1,
                roue = 0,
                primcouleur = 1,
                seconcouleur = 1
            })
            TriggerEvent("crz_menu:InInventory")
            SetNuiFocus(true, true)
            ESX.ShowNotification("IN")
 
        end
    end
end)

RegisterNUICallback('disablenuifocus', function()
    InScreen = false
    TriggerEvent("crz_menu:OutInventory")
    SetNuiFocus(false, false)
    ESX.ShowNotification("OUT")
end)




RegisterNUICallback('displaytitle', function(data)
    TriggerEvent("crz_menu:InInventory")
    SetNuiFocus(true, true)
    ESX.ShowNotification(data.id)
end)
  

            