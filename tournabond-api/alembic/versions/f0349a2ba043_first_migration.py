"""First migration

Revision ID: f0349a2ba043
Revises: 
Create Date: 2022-11-25 16:59:15.893053

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f0349a2ba043'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'contracts',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('owner_address', sa.String, nullable=False),
        sa.Column('contract_address', sa.String),
    )


def downgrade() -> None:
    op.drop_table('contracts')
