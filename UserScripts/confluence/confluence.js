window.onload = function() {
  var addStyle = document.createElement('link');

  // swap in a mo betta Navis logotype
  //$('#logo a img').attr('src','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAeCAYAAADXRcu0AAAFGUlEQVRo3u1Za4iUVRie1Vq7amoXbdWZLCIpf9RihAUtRhMT7rorjHtNkvCHllHgBjtG/fGHYBbdwE0y7IKJW2uECqZiIIldoMigyw9pFZIlCXbHzFWz51nOLG9v3zffe2ZnZyG+Ay8z833v5Zz3Oe/lnEkk/ofj9HM1swa6UisS8RjfMdiVfD2/LtX3QzZRHXtjnEZ/Z2oGQDgLujTYlVoVe2ScRn5dciNBGKZc8sQvaxKTYq9UeAx01UyH8/MjQDAqcsknY89UujbkkuslCC4qTsZRUclOac20yYO5VH8+lxrSFNeKeMQjHvGIRzziMfrR3t6+A/QRqaOjo6e1tfVOi1w2m51TkCNB7iZf2y0tLTe3tbUtLxB+p6JkwJcELSkQ5nyPj03IPCrkHynCd6+0U1tbe7nVBnxTDZmloOcxv27QbvhoJ+gVPFsLavnPWsE0BLok6CQXawBwvpSDzFxfICC3VdnuMSyyBrbPFWTw/VRdXd0VFnvYLIukPci+VmR9u9T6php8Mhm8G0D9al2BBP4fCUx9ff1VQUCQfsKCbxhLIKD/Fug4ryb2d3Nz8zwDgN1KbrUx+j8Xcn8R1HIB0dTUdCNkflbzOg86iu+9+NyDz+9BA4rnM8xjYhgQZPi6oaHh2rECAvxbQuy+Z5CdC74LQuY4ouKyiGh4UNl5MwI0LyAYzUr/BwBnegBrFd7dD3oD9MWIXgmERhR0gPmu3EAw9RXZABcsusD3rrL/WISjDggb55CjZ5cLiEwmMwk8F6X+4XTjmaclEKtBbyvH7ATbBC2HFHJXqUBA52adq9Xvt6J0MIUxlQmZY9xtIdHwgNK/2TBHMxDMHHIuJAC9sGQgYGwV8xWUfhI18VKB4E6UxZY7lUDLaOR70CzD3HvUHJaE8O0TfEPGZsQrNYH/sPIZ17gNn03w6TRvIFwhvTJA8fpyAMHcLOWYu126ekLZe9UA6t1K5miAvfvUPLcYN2ivDxAuQvuKdEjHXav/DHhvNwHhHDOV4a4m8/RogGCXwm5FyB2SvTdbZzHxP9mJGBy2WwG7SL3fK7sYdmvGDePdvrI481wWVv8UMMegsz0SCOG4X2V7WRAuBQhdC7TToONZNeENhqhYqBa4X9hboPRt9UjZvb5AyE0MmRXsnHhWkIVcE3g3RQLhCt0dePe7zLFQnuEJ3AcI8MwEnRUOO6x50un01crWgPEgdVCBscA9/1R2Y9hYt1UCiJBinoael0F/BETH4kggRJ49I4TP4NlKHyB4vFfG0yF8Lyi9LxqAeEjp/phXH2rB2zyvfnaVC4iAaPlWza3bBEThjkaehPWpuBgQvIdizheyR4pNFO8HBe9p7ORrDI47IlMoPr+S0RBYIMcBCLfGtQqI7WYgnILlul+2AAGZl9SOzUSkhY1Kf6fBcYuLFMf3S7gM9W1f51vAYlOirlroj5VeQDgndfoAwTsrvM8Lo18abMyU3ZX1Yi8g5EkXWefGEghGvMv99OU+8D6FZw+zjlIOPpiCiLwV3x/H++90yz18PeMLhIuMTVYg3G3kvwtTCadvLs4wr2xAIfywlPThU6z1dYuV2EwQpBGDfEBiHTDOs4rpoyDnFM4I6atlvv/GI4/qi70+w38CE1y7OFIrrP+vjAYIdkX8/8FdD/0W4fxToHfYYFTyf6cq5kRBEz2vyqVsddhdknYKD4IkgHB9qRNnuuBlXoF8ZBsbG69zbX8daBmvXnjece1z4Br+ASPNBhknJkOfAAAAAElFTkSuQmCC');

  // load stylesheet from Dbox public folder
  addStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/confluence/confluence.css');
  addStyle.setAttribute('rel', 'stylesheet');
  addStyle.setAttribute('type', 'text/css');
  document.head.appendChild(addStyle);
}
