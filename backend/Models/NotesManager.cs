using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KeepBakcend.Models
{
    public class NotesManager : IDataRepository<Notes>
    {
        readonly AppDbContext _dbContext;
        public NotesManager(AppDbContext context)
        {
            _dbContext = context;
        }

        public IEnumerable<Notes> GetAll()
        {
            return _dbContext.Notes.ToList();
        }

        public Notes Get(int id)
        {
            return _dbContext.Notes
                  .FirstOrDefault(e => e.id == id);
        }

        public void Add(Notes note)
        {
            _dbContext.Notes.Add(note);
            _dbContext.SaveChanges();
        }

        public void Change(Notes prevNote, Notes note)
        {
            prevNote.Title = note.Title;
            prevNote.Text = note.Text;
            prevNote.bgColor = note.bgColor;
            prevNote.IsPinned = note.IsPinned;
            prevNote.Arrangement = note.Arrangement;
                _dbContext.SaveChanges();
        }

        public void Delete(Notes note)
        {
            _dbContext.Notes.Remove(note);
            _dbContext.SaveChanges();
        }
    }
}
