using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KeepBakcend.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace KeepBakcend.Controllers
{
    [Route("api/notes")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private IDataRepository<Notes> _repository;
        public NotesController(IDataRepository<Notes> repository)
        {
            _repository = repository;
        }

        // GET: api/<controller>  
        [HttpGet]
        [EnableCors("MyPolicy")]
        public IActionResult Get()
        {
            IEnumerable<Notes> notes = _repository.GetAll();
            return Ok(notes);
        }

        // GET api/<controller>/5  
        [HttpGet("{id}")]
        [EnableCors("MyPolicy")]
        public IActionResult Get(int id)
        {
            Notes note = _repository.Get(id);

            if (note == null)
            {
                return NotFound("The Employee record couldn't be found.");
            }

            return Ok(note);
        }

        [HttpPost]
        [EnableCors("MyPolicy")]
        public BaseModel Post([FromBody] Notes note)
        {
            if (note == null)
            {
                return new BaseModel { success = false };
            }
            else
            {
                _repository.Add(note);
                return new BaseModel { message = "Notes added successfully", items = "", success = true, total = 1 };

            }
            
        }


        // PUT api/<controller>/5  
        [HttpPut("{id}")]
        [EnableCors("MyPolicy")]
        public BaseModel Put(int id, [FromBody] Notes note)
        {
            if (note == null)
            {
                return new BaseModel { success = false, message = "Empty" };
            }
            Notes noteToUpdate = _repository.Get(id);
            if (noteToUpdate == null)
            {
                return new BaseModel { success = false, message = "Not found" };
            }
            _repository.Change(noteToUpdate, note);
            return new BaseModel { message = "Notes updated successfully", items = "", success = true, total = 1 };
        }

        // DELETE api/<controller>/5  
        [HttpDelete("{id}")]
        [EnableCors("MyPolicy")]
        public IActionResult Delete(int id)
        {
            Notes note = _repository.Get(id);
            if (note == null)
            {
                return BadRequest("note is not found");
            }
            _repository.Delete(note);
            return NoContent();
        }
    }
}
