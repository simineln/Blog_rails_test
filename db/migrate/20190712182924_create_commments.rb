class CreateCommments < ActiveRecord::Migration[5.2]
  def change
    create_table :commments do |t|
      t.string :name
      t.string :email
      t.text :body

      t.timestamps
    end
  end
end
