# To-Do Manager

Ein einfaches Kommandozeilen-Tool zum Verwalten von Aufgaben. Aufgaben werden in `todos.txt` gespeichert.

## Voraussetzungen

- Python 3 installiert (`python --version`)

## Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `python todo_manager.py add "<Aufgabe>"` | Neue Aufgabe hinzufügen |
| `python todo_manager.py list` | Alle Aufgaben anzeigen |
| `python todo_manager.py done <Nr>` | Aufgabe als erledigt markieren |
| `python todo_manager.py remove <Nr>` | Aufgabe löschen |
| `python todo_manager.py help` | Hilfe anzeigen |

## Beispiele

```bash
# Aufgaben hinzufügen
python todo_manager.py add "Einkaufen gehen"
python todo_manager.py add "Python lernen"

# Liste anzeigen
python todo_manager.py list

# Aufgabe 1 als erledigt markieren
python todo_manager.py done 1

# Aufgabe 2 löschen
python todo_manager.py remove 2
```

## Ausgabe-Beispiel

```
Deine To-Do-Liste (2 Aufgabe(n)):

  1. [x] Einkaufen gehen
  2. [ ] Python lernen
```

`[x]` = erledigt, `[ ]` = offen
