import sys
import os

TODO_FILE = "todos.txt"


def load_tasks():
    if not os.path.exists(TODO_FILE):
        return []
    with open(TODO_FILE, "r", encoding="utf-8") as f:
        return [line.rstrip("\n") for line in f if line.strip()]


def save_tasks(tasks):
    with open(TODO_FILE, "w", encoding="utf-8") as f:
        for task in tasks:
            f.write(task + "\n")


def add_task(text):
    tasks = load_tasks()
    tasks.append(f"[ ] {text}")
    save_tasks(tasks)
    print(f'Aufgabe hinzugefügt: "{text}"')


def list_tasks():
    tasks = load_tasks()
    if not tasks:
        print("Keine Aufgaben vorhanden.")
        return
    print(f"\nDeine To-Do-Liste ({len(tasks)} Aufgabe(n)):\n")
    for i, task in enumerate(tasks, 1):
        print(f"  {i}. {task}")
    print()


def done_task(number):
    tasks = load_tasks()
    if number < 1 or number > len(tasks):
        print(f"Fehler: Keine Aufgabe mit Nummer {number}.")
        return
    task = tasks[number - 1]
    if task.startswith("[x]"):
        print("Aufgabe ist bereits als erledigt markiert.")
        return
    tasks[number - 1] = "[x]" + task[3:]
    save_tasks(tasks)
    print(f'Erledigt: "{task[4:]}"')


def remove_task(number):
    tasks = load_tasks()
    if number < 1 or number > len(tasks):
        print(f"Fehler: Keine Aufgabe mit Nummer {number}.")
        return
    removed = tasks.pop(number - 1)
    save_tasks(tasks)
    print(f'Gelöscht: "{removed[4:]}"')


def print_help():
    print("""
Verwendung:
  python todo_manager.py add "<Aufgabe>"   Neue Aufgabe hinzufügen
  python todo_manager.py list              Alle Aufgaben anzeigen
  python todo_manager.py done <Nr>         Aufgabe als erledigt markieren
  python todo_manager.py remove <Nr>       Aufgabe löschen
  python todo_manager.py help              Diese Hilfe anzeigen
""")


def main():
    if len(sys.argv) < 2:
        print_help()
        return

    command = sys.argv[1].lower()

    if command == "add":
        if len(sys.argv) < 3:
            print("Fehler: Bitte einen Aufgabentext angeben.")
            print('  Beispiel: python todo_manager.py add "Einkaufen gehen"')
        else:
            add_task(" ".join(sys.argv[2:]))

    elif command == "list":
        list_tasks()

    elif command == "done":
        if len(sys.argv) < 3 or not sys.argv[2].isdigit():
            print("Fehler: Bitte eine gültige Aufgabennummer angeben.")
            print("  Beispiel: python todo_manager.py done 1")
        else:
            done_task(int(sys.argv[2]))

    elif command == "remove":
        if len(sys.argv) < 3 or not sys.argv[2].isdigit():
            print("Fehler: Bitte eine gültige Aufgabennummer angeben.")
            print("  Beispiel: python todo_manager.py remove 1")
        else:
            remove_task(int(sys.argv[2]))

    elif command == "help":
        print_help()

    else:
        print(f'Unbekannter Befehl: "{command}"')
        print_help()


if __name__ == "__main__":
    main()
