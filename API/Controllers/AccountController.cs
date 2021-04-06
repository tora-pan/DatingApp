using System;
using API.Data;
using API.Entities;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;
using API.Controllers;
using API.DTOs;
using Microsoft.EntityFrameworkCore;

public class AccountController :BaseApiController
{
	private readonly DataContext _context;

	public AccountController(DataContext context)
	{
		_context = context;
	}

	[HttpPost("register")]
	public async Task<ActionResult<AppUser>> Register(RegisterDto registerDto)
    {
		//return a 400 request when the username is taken already.
		if (await UserExists(registerDto.Username)) return BadRequest("Username is taken");

		using var hmac = new HMACSHA512();

		var user = new AppUser
        {
			UserName = registerDto.Username,
			PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
			PasswordSalt = hmac.Key
        };

		_context.Users.Add(user);

		//Call database and save users
		await _context.SaveChangesAsync();
		
		return user;
	}

	// helper method

	private async Task<bool> UserExists(string username)
    {
		return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
    }
}
