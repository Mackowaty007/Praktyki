function love.load()
  tank = {}
  size = 20
  tank.speed = 5
  tank.x = 400 - size / 2
  tank.y = 380
  --enemies
  enemy = {}
  enemy.x = 50
  enemy.y = 10
  enemy.alive = true

  enemy1 = {}
  enemy1.x = 150
  enemy1.y = 10
  enemy1.alive = true

  enemy2 = {}
  enemy2.x = 250
  enemy2.y = 10
  enemy2.alive = true

  enemy3 = {}
  enemy3.x = 350
  enemy3.y = 10
  enemy3.alive = true

  enemy4 = {}
  enemy4.x = 450
  enemy4.y = 10
  enemy4.alive = true

  enemy5 = {}
  enemy5.x = 550
  enemy5.y = 10
  enemy5.alive = true
  --bullet
  bullet = {}
  bullet.x = -10
  bullet.y = -10
  bullet.size = 10
  bullet.speed = 6
  --score
  score = 0
end
function love.update(dt)
  --movement
  if love.keyboard.isDown("left") then
    tank.x = tank.x - tank.speed
  end
  if love.keyboard.isDown("right") then
    tank.x = tank.x + tank.speed
  end
  --player colisions
  if tank.x > 600 - size then
    tank.x = 600 - size
  end
  if tank.x < 0 then
    tank.x = 0
  end
  --shooting
  if love.keyboard.isDown("space") and bullet.y < 0 then
    bullet.x = tank.x
    bullet.y = tank.y
  end
  bullet.y = bullet.y - bullet.speed
  --colisions
  if enemy.alive == true and bullet.x > enemy.x - bullet.size and bullet.x < enemy.x + size and bullet.y > enemy.y and bullet.y < enemy.y + size then
    score = score + 1
    enemy.alive = false
  end

  if enemy1.alive == true and bullet.x > enemy1.x - bullet.size and bullet.x < enemy1.x + size and bullet.y > enemy1.y and bullet.y < enemy1.y + size then
    score = score + 1
    enemy1.alive = false
  end

  if enemy2.alive == true and bullet.x > enemy2.x - bullet.size and bullet.x < enemy2.x + size and bullet.y > enemy2.y and bullet.y < enemy2.y + size then
    score = score + 1
    enemy2.alive = false
  end

  if enemy3.alive == true and bullet.x > enemy3.x - bullet.size and bullet.x < enemy3.x + size and bullet.y > enemy3.y and bullet.y < enemy3.y + size then
    score = score + 1
    enemy3.alive = false
  end

  if enemy4.alive == true and bullet.x > enemy4.x - bullet.size and bullet.x < enemy4.x + size and bullet.y > enemy4.y and bullet.y < enemy4.y + size then
    score = score + 1
    enemy4.alive = false
  end

  if enemy5.alive == true and bullet.x > enemy5.x - bullet.size and bullet.x < enemy5.x + size and bullet.y > enemy5.y and bullet.y < enemy5.y + size then
    score = score + 1
    enemy5.alive = false
  end

end
function love.draw()
  love.graphics.setColor(1,1,1)
  love.graphics.rectangle("fill",tank.x,tank.y,size,size)
  love.graphics.rectangle("fill",bullet.x,bullet.y,bullet.size,bullet.size)
  love.graphics.setColor(1,0,0)
  if enemy.alive == true then
    love.graphics.rectangle("fill",enemy.x,enemy.y,size,size)
  else
  end

  if enemy1.alive == true then
    love.graphics.rectangle("fill",enemy1.x,enemy1.y,size,size)
  else
  end

  if enemy2.alive == true then
    love.graphics.rectangle("fill",enemy2.x,enemy2.y,size,size)
  else
  end

  if enemy3.alive == true then
    love.graphics.rectangle("fill",enemy3.x,enemy3.y,size,size)
  else
  end

  if enemy4.alive == true then
    love.graphics.rectangle("fill",enemy4.x,enemy4.y,size,size)
  else
  end

  if enemy5.alive == true then
    love.graphics.rectangle("fill",enemy5.x,enemy5.y,size,size)
  else
  end
  love.graphics.print(score)
end
